import axios from 'axios';

const API_BASE_URL = '/ourown-main/api';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

// Add response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error('API Error:', error);
    if (error.response) {
      throw new Error(error.response.data?.message || 'An error occurred');
    }
    throw new Error('Network error occurred');
  }
);

// API methods
const api = {
  async get(endpoint) {
    return axiosInstance.get(endpoint);
  },

  async post(endpoint, data) {
    return axiosInstance.post(endpoint, data);
  },

  async put(endpoint, data) {
    return axiosInstance.put(endpoint, data);
  },

  async delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },

  async submitContactForm(formData) {
    try {
      const response = await axiosInstance.post('/contact/submit.php', formData);
      return response;
    } catch (error) {
      console.error('Submit Form Error:', error);
      throw error;
    }
  },

  async submitPartnershipForm(formData) {
    try {
      const response = await axiosInstance.post('/partnership/submit.php', formData);
      return response;
    } catch (error) {
      console.error('Submit Partnership Form Error:', error);
      throw error;
    }
  },

  async submitIncubationForm(formData) {
    try {
      console.log('Submitting incubation form:', formData);
      const response = await axiosInstance.post('/incubation/submit.php', formData);
      console.log('Incubation form response:', response);
      
      // Check if response exists and has data
      if (!response) {
        throw new Error('No response received from server');
      }

      // If response is successful but doesn't have success field, assume success
      if (typeof response.success === 'undefined') {
        return {
          success: true,
          applicationId: response.applicationId || null,
          message: response.message || 'Application submitted successfully'
        };
      }

      return response;
    } catch (error) {
      console.error('Submit Incubation Form Error:', error);
      if (error.message.includes('Network Error')) {
        throw new Error('Unable to connect to server. Please check your internet connection.');
      }
      throw new Error(error.message || 'Failed to submit application. Please try again.');
    }
  }
};

export { api };
export const submitContactForm = api.submitContactForm;
export const submitPartnershipForm = api.submitPartnershipForm;
export const submitIncubationForm = api.submitIncubationForm; 