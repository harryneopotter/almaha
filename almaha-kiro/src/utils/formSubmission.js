/**
 * Form Submission Utilities
 * Handles form submission, API calls, and user feedback
 */

/**
 * Simulate form submission delay
 * @param {number} delay - Delay in milliseconds
 * @returns {Promise} Promise that resolves after delay
 */
const simulateDelay = (delay = 1000) => {
  return new Promise(resolve => setTimeout(resolve, delay));
};

/**
 * Submit contact form
 * @param {Object} formData - Contact form data
 * @returns {Promise} Submission result
 */
export const submitContactForm = async (formData) => {
  try {
    // Simulate API call delay
    await simulateDelay(1500);
    
    // In a real application, this would be an actual API call
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // });
    
    // Simulate random success/failure for demo purposes
    const isSuccess = Math.random() > 0.1; // 90% success rate
    
    if (isSuccess) {
      // Log form submission (in real app, this would be sent to server)
      console.log('Contact form submitted:', {
        timestamp: new Date().toISOString(),
        formData: {
          ...formData,
          // Don't log sensitive data in production
          email: formData.email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
          phone: formData.phone.replace(/(.{3})(.*)(.{4})/, '$1***$3')
        }
      });
      
      return {
        success: true,
        message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
        data: {
          submissionId: `CONTACT_${Date.now()}`,
          timestamp: new Date().toISOString()
        }
      };
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return {
      success: false,
      message: 'There was an error sending your message. Please try again or contact us directly.',
      error: error.message
    };
  }
};

/**
 * Submit job application form
 * @param {Object} formData - Job application form data
 * @param {string} jobTitle - Job title being applied for
 * @returns {Promise} Submission result
 */
export const submitJobApplication = async (formData, jobTitle) => {
  try {
    // Simulate API call delay
    await simulateDelay(2000);
    
    // In a real application, this would handle file upload and form submission
    // const formDataObj = new FormData();
    // Object.keys(formData).forEach(key => {
    //   formDataObj.append(key, formData[key]);
    // });
    // formDataObj.append('jobTitle', jobTitle);
    
    // const response = await fetch('/api/job-application', {
    //   method: 'POST',
    //   body: formDataObj,
    // });
    
    // Simulate random success/failure for demo purposes
    const isSuccess = Math.random() > 0.05; // 95% success rate
    
    if (isSuccess) {
      // Log application submission (in real app, this would be sent to server)
      console.log('Job application submitted:', {
        timestamp: new Date().toISOString(),
        jobTitle,
        applicantData: {
          ...formData,
          // Don't log sensitive data in production
          email: formData.email.replace(/(.{2})(.*)(@.*)/, '$1***$3'),
          phone: formData.phone.replace(/(.{3})(.*)(.{4})/, '$1***$3'),
          resume: formData.resume ? `${formData.resume.name} (${formData.resume.size} bytes)` : null
        }
      });
      
      return {
        success: true,
        message: `Thank you for applying for the ${jobTitle} position! We'll review your application and get back to you soon.`,
        data: {
          applicationId: `JOB_${Date.now()}`,
          jobTitle,
          timestamp: new Date().toISOString()
        }
      };
    } else {
      throw new Error('Application submission failed');
    }
  } catch (error) {
    console.error('Job application submission error:', error);
    
    return {
      success: false,
      message: 'There was an error submitting your application. Please try again or email us directly.',
      error: error.message
    };
  }
};

/**
 * Handle form submission with loading state and user feedback
 * @param {Function} submitFunction - Function to handle submission
 * @param {Object} formData - Form data to submit
 * @param {Function} setIsSubmitting - Function to set loading state
 * @param {Function} setSubmitStatus - Function to set submission status
 * @param {Function} onSuccess - Optional success callback
 * @param {Function} onError - Optional error callback
 * @returns {Promise} Submission result
 */
export const handleFormSubmission = async (
  submitFunction,
  formData,
  setIsSubmitting,
  setSubmitStatus,
  onSuccess = null,
  onError = null
) => {
  setIsSubmitting(true);
  setSubmitStatus('');
  
  try {
    const result = await submitFunction(formData);
    
    if (result.success) {
      setSubmitStatus('success');
      if (onSuccess) {
        onSuccess(result);
      }
    } else {
      setSubmitStatus('error');
      if (onError) {
        onError(result);
      }
    }
    
    return result;
  } catch (error) {
    console.error('Form submission error:', error);
    setSubmitStatus('error');
    
    const errorResult = {
      success: false,
      message: 'An unexpected error occurred. Please try again.',
      error: error.message
    };
    
    if (onError) {
      onError(errorResult);
    }
    
    return errorResult;
  } finally {
    setIsSubmitting(false);
  }
};

/**
 * Reset form after successful submission
 * @param {Function} setFormData - Function to reset form data
 * @param {Object} initialFormData - Initial form data structure
 * @param {Function} setErrors - Function to reset form errors
 * @param {number} delay - Delay before reset in milliseconds
 */
export const resetFormAfterSubmission = (
  setFormData,
  initialFormData,
  setErrors = null,
  delay = 3000
) => {
  setTimeout(() => {
    setFormData(initialFormData);
    if (setErrors) {
      setErrors({});
    }
  }, delay);
};

/**
 * Show success message with auto-hide
 * @param {Function} setSubmitStatus - Function to set submission status
 * @param {number} duration - Duration to show message in milliseconds
 */
export const showSuccessMessage = (setSubmitStatus, duration = 5000) => {
  setTimeout(() => {
    setSubmitStatus('');
  }, duration);
};

/**
 * Validate and submit form with comprehensive error handling
 * @param {Object} options - Submission options
 * @returns {Promise} Submission result
 */
export const validateAndSubmitForm = async ({
  formData,
  validationFunction,
  submitFunction,
  setFormData,
  setErrors,
  setIsSubmitting,
  setSubmitStatus,
  initialFormData,
  onSuccess = null,
  onError = null
}) => {
  // Validate form
  const validation = validationFunction(formData);
  
  if (!validation.isValid) {
    setErrors(validation.errors);
    return {
      success: false,
      message: 'Please correct the errors in the form.',
      errors: validation.errors
    };
  }
  
  // Clear any existing errors
  setErrors({});
  
  // Submit form
  const result = await handleFormSubmission(
    submitFunction,
    formData,
    setIsSubmitting,
    setSubmitStatus,
    (successResult) => {
      // Reset form after successful submission
      resetFormAfterSubmission(setFormData, initialFormData, setErrors);
      showSuccessMessage(setSubmitStatus);
      
      if (onSuccess) {
        onSuccess(successResult);
      }
    },
    onError
  );
  
  return result;
};

/**
 * Create form submission handler
 * @param {Object} config - Configuration object
 * @returns {Function} Form submission handler
 */
export const createFormSubmissionHandler = (config) => {
  const {
    validationFunction,
    submitFunction,
    setFormData,
    setErrors,
    setIsSubmitting,
    setSubmitStatus,
    initialFormData,
    onSuccess,
    onError
  } = config;
  
  return async (formData) => {
    return await validateAndSubmitForm({
      formData,
      validationFunction,
      submitFunction,
      setFormData,
      setErrors,
      setIsSubmitting,
      setSubmitStatus,
      initialFormData,
      onSuccess,
      onError
    });
  };
};

/**
 * Get user-friendly error message
 * @param {string} error - Error type or message
 * @returns {string} User-friendly error message
 */
export const getUserFriendlyErrorMessage = (error) => {
  const errorMessages = {
    'network': 'Network error. Please check your internet connection and try again.',
    'timeout': 'Request timed out. Please try again.',
    'server': 'Server error. Please try again later.',
    'validation': 'Please check your input and try again.',
    'file_too_large': 'File is too large. Please choose a smaller file.',
    'invalid_file_type': 'Invalid file type. Please choose a supported file format.',
    'rate_limit': 'Too many requests. Please wait a moment and try again.',
    'unauthorized': 'You are not authorized to perform this action.',
    'forbidden': 'This action is not allowed.',
    'not_found': 'The requested resource was not found.',
    'conflict': 'There was a conflict with your request. Please try again.',
    'default': 'An unexpected error occurred. Please try again.'
  };
  
  return errorMessages[error] || errorMessages.default;
};

// Export all utilities
export default {
  submitContactForm,
  submitJobApplication,
  handleFormSubmission,
  resetFormAfterSubmission,
  showSuccessMessage,
  validateAndSubmitForm,
  createFormSubmissionHandler,
  getUserFriendlyErrorMessage
};