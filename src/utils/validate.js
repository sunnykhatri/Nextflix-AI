export const checkValidData = (email, password, name) => {
    
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);
    
    if (!isEmailValid) return "Invalid email format";
    if (!isPasswordValid) return "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    // if (!isNameValid) return "Name can only contain letters and spaces";
    // if (name.length < 3) return "Name must be at least 3 characters long";

    return null;
}