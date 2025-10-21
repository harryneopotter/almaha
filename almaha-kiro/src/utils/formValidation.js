/**
 * Form Validation Utilities
 * Comprehensive validation functions for all form types
 */

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone validation regex (supports international formats)
const PHONE_REGEX = /^[\+]?[1-9][\d]{0,15}$/;

// Name validation regex (letters, spaces, hyphens, apostrophes)
const NAME_REGEX = /^[a-zA-Z\s\-']+$/;

/**
 * Validate email address
 * @param {string} email - Email to validate
 * @returns {Object} Validation result
 */
export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return { isValid: false, message: 'Email is required' };
  }
  
  if (!EMAIL_REGEX.test(email.trim())) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {Object} Validation result
 */
export const validatePhone = (phone) => {
  if (!phone || !phone.trim()) {
    return { isValid: false, message: 'Phone number is required' };
  }
  
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  
  if (cleanPhone.length < 10) {
    return { isValid: false, message: 'Phone number must be at least 10 digits' };
  }
  
  if (!PHONE_REGEX.test(cleanPhone)) {
    return { isValid: false, message: 'Please enter a valid phone number' };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate name fields
 * @param {string} name - Name to validate
 * @param {string} fieldName - Field name for error message
 * @returns {Object} Validation result
 */
export const validateName = (name, fieldName = 'Name') => {
  if (!name || !name.trim()) {
    return { isValid: false, message: `${fieldName} is required` };
  }
  
  if (name.trim().length < 2) {
    return { isValid: false, message: `${fieldName} must be at least 2 characters` };
  }
  
  if (name.trim().length > 100) {
    return { isValid: false, message: `${fieldName} must be less than 100 characters` };
  }
  
  if (!NAME_REGEX.test(name.trim())) {
    return { isValid: false, message: `${fieldName} can only contain letters, spaces, hyphens, and apostrophes` };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate required text field
 * @param {string} value - Value to validate
 * @param {string} fieldName - Field name for error message
 * @param {number} minLength - Minimum length (default: 1)
 * @param {number} maxLength - Maximum length (default: 500)
 * @returns {Object} Validation result
 */
export const validateRequired = (value, fieldName, minLength = 1, maxLength = 500) => {
  if (!value || !value.trim()) {
    return { isValid: false, message: `${fieldName} is required` };
  }
  
  if (value.trim().length < minLength) {
    return { isValid: false, message: `${fieldName} must be at least ${minLength} characters` };
  }
  
  if (value.trim().length > maxLength) {
    return { isValid: false, message: `${fieldName} must be less than ${maxLength} characters` };
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate file upload
 * @param {File} file - File to validate
 * @param {Array} allowedTypes - Allowed file types
 * @param {number} maxSize - Maximum file size in bytes
 * @returns {Object} Validation result
 */
export const validateFile = (file, allowedTypes = [], maxSize = 2 * 1024 * 1024) => {
  if (!file) {
    return { isValid: false, message: 'File is required' };
  }
  
  // Check file size
  if (file.size > maxSize) {
    const maxSizeMB = Math.round(maxSize / (1024 * 1024));
    return { isValid: false, message: `File size must be less than ${maxSizeMB}MB` };
  }
  
  // Check file type
  if (allowedTypes.length > 0) {
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const mimeType = file.type.toLowerCase();
    
    const isValidType = allowedTypes.some(type => {
      if (type.startsWith('.')) {
        return fileExtension === type.substring(1);
      }
      return mimeType.includes(type);
    });
    
    if (!isValidType) {
      return { isValid: false, message: `File type not allowed. Allowed types: ${allowedTypes.join(', ')}` };
    }
  }
  
  return { isValid: true, message: '' };
};

/**
 * Validate contact form
 * @param {Object} formData - Form data to validate
 * @returns {Object} Validation results
 */
export const validateContactForm = (formData) => {
  const errors = {};
  
  // Validate full name
  const nameValidation = validateName(formData.fullName, 'Full name');
  if (!nameValidation.isValid) {
    errors.fullName = nameValidation.message;
  }
  
  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
  }
  
  // Validate phone
  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.message;
  }
  
  // Validate subject
  const subjectValidation = validateRequired(formData.subject, 'Subject', 3, 200);
  if (!subjectValidation.isValid) {
    errors.subject = subjectValidation.message;
  }
  
  // Validate service
  const serviceValidation = validateRequired(formData.service, 'Type of service', 3, 200);
  if (!serviceValidation.isValid) {
    errors.service = serviceValidation.message;
  }
  
  // Validate message
  const messageValidation = validateRequired(formData.message, 'Message', 10, 2000);
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Validate job application form
 * @param {Object} formData - Form data to validate
 * @returns {Object} Validation results
 */
export const validateJobApplicationForm = (formData) => {
  const errors = {};
  
  // Validate full name
  const nameValidation = validateName(formData.fullName, 'Full name');
  if (!nameValidation.isValid) {
    errors.fullName = nameValidation.message;
  }
  
  // Validate email
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
  }
  
  // Validate phone
  const phoneValidation = validatePhone(formData.phone);
  if (!phoneValidation.isValid) {
    errors.phone = phoneValidation.message;
  }
  
  // Validate city (optional but if provided, should be valid)
  if (formData.city && formData.city.trim()) {
    const cityValidation = validateName(formData.city, 'City');
    if (!cityValidation.isValid) {
      errors.city = cityValidation.message;
    }
  }
  
  // Validate experience (optional but if provided, should be valid)
  if (formData.totalExperience && formData.totalExperience.trim()) {
    const expValidation = validateRequired(formData.totalExperience, 'Total experience', 1, 50);
    if (!expValidation.isValid) {
      errors.totalExperience = expValidation.message;
    }
  }
  
  // Validate qualification
  const qualificationValidation = validateRequired(formData.qualification, 'Qualification', 2, 200);
  if (!qualificationValidation.isValid) {
    errors.qualification = qualificationValidation.message;
  }
  
  // Validate resume file
  if (formData.resume) {
    const fileValidation = validateFile(
      formData.resume,
      ['.pdf', '.doc', '.docx', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
      2 * 1024 * 1024 // 2MB
    );
    if (!fileValidation.isValid) {
      errors.resume = fileValidation.message;
    }
  }
  
  // Validate message (optional)
  if (formData.message && formData.message.trim()) {
    const messageValidation = validateRequired(formData.message, 'Message', 10, 1000);
    if (!messageValidation.isValid) {
      errors.message = messageValidation.message;
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

/**
 * Sanitize input to prevent XSS
 * @param {string} input - Input to sanitize
 * @returns {string} Sanitized input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

/**
 * Format phone number for display
 * @param {string} phone - Phone number to format
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }
  
  if (cleaned.length === 11 && cleaned.startsWith('1')) {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
};

/**
 * Debounce function for real-time validation
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Export all validation functions
export default {
  validateEmail,
  validatePhone,
  validateName,
  validateRequired,
  validateFile,
  validateContactForm,
  validateJobApplicationForm,
  sanitizeInput,
  formatPhoneNumber,
  debounce
};