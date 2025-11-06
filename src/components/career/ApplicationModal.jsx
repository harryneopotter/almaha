import { useState, useEffect } from 'react';
import styles from './ApplicationModal.module.css';

function ApplicationModal({ onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    totalExperience: '',
    highestQualification: '',
    appliedFor: '',
    resume: null,
    photograph: null,
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    
    if (file && file.size > 2 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, [name]: 'File size must be less than 2MB' }));
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: file }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // TODO: Implement actual form submission (API call or email service)
    console.log('Form submitted:', formData);
    alert('Application submitted successfully!');
    onClose();
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h2>Apply Now</h2>
          <button className={styles.closeButton} onClick={onClose} aria-label="Close">
            <i className="fa fa-times"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className={errors.fullName ? styles.inputError : ''}
              />
              {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={errors.email ? styles.inputError : ''}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={errors.phone ? styles.inputError : ''}
              />
              {errors.phone && <span className={styles.error}>{errors.phone}</span>}
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className={errors.city ? styles.inputError : ''}
              />
              {errors.city && <span className={styles.error}>{errors.city}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="totalExperience"
                placeholder="Total Experience"
                value={formData.totalExperience}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="highestQualification"
                placeholder="Highest Qualification"
                value={formData.highestQualification}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="appliedFor"
                placeholder="Applied For"
                value={formData.appliedFor}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.fileLabel}>
                Upload Resume (Max: 2MB)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
              {errors.resume && <span className={styles.error}>{errors.resume}</span>}
            </div>
            <div className={styles.formGroup}>
              <label className={styles.fileLabel}>
                Upload Photograph (Max: 2MB)
              </label>
              <input
                type="file"
                name="photograph"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.fileInput}
              />
              {errors.photograph && <span className={styles.error}>{errors.photograph}</span>}
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className={styles.textarea}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            Apply
          </button>
        </form>
      </div>
    </div>
  );
}

export default ApplicationModal;
