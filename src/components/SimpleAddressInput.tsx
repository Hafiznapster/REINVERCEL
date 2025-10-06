import React, { useState } from 'react';

interface SimpleAddressInputProps {
  value: string;
  onChange: (address: string) => void;
  onAddressSelected: (selected: boolean) => void;
  placeholder?: string;
  className?: string;
}

const SimpleAddressInput: React.FC<SimpleAddressInputProps> = ({
  value,
  onChange,
  onAddressSelected,
  placeholder = "Enter your full address...",
  className = "form-control"
}) => {
  const [isValid, setIsValid] = useState(false);

  const validateAddress = (address: string) => {
    // Simple validation - check if address has basic components
    const hasNumber = /\d/.test(address);
    const hasStreet = address.length > 10;
    const hasComma = address.includes(',') || address.includes(' ');
    
    return hasNumber && hasStreet && hasComma;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
    
    const valid = validateAddress(newValue);
    setIsValid(valid);
    onAddressSelected(valid);
  };

  return (
    <div>
      <input
        type="text"
        className={`${className} ${value && !isValid ? 'border-warning' : ''} ${isValid ? 'border-success' : ''}`}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="street-address"
      />
      {value && !isValid && (
        <div className="form-text text-warning">
          <i className="fas fa-exclamation-triangle me-1"></i>
          Please enter a complete address (e.g., "123 Main St, New York, NY 10001")
        </div>
      )}
      {isValid && (
        <div className="form-text text-success">
          <i className="fas fa-check-circle me-1"></i>
          Address looks good
        </div>
      )}
      <div className="form-text text-muted">
        <small>
          <i className="fas fa-info-circle me-1"></i>
          Enter your complete address including street number, street name, city, and state/country
        </small>
      </div>
    </div>
  );
};

export default SimpleAddressInput;