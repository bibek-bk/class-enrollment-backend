
CREATE DATABASE IF NOT EXISTS class_enrollment;

USE class_enrollment;

-- Create Visitors Table
CREATE TABLE IF NOT EXISTS visitors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('new', 'contacted', 'converted', 'lost') DEFAULT 'new'
);

-- Create Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Students Table
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    phone VARCHAR(15),
    course_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE SET NULL
);

-- -- Create Enrollments Table
-- CREATE TABLE IF NOT EXISTS enrollments (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     visitor_id INT NOT NULL,
--     course_id INT NOT NULL,
--     enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     status ENUM('pending', 'enrolled', 'completed', 'cancelled') DEFAULT 'pending',
--     payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
--     FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE CASCADE,
--     FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
-- );

-- Create Enrollments Table
CREATE TABLE IF NOT EXISTS enrollments (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    visitor_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('pending', 'enrolled', 'completed', 'cancelled') DEFAULT 'pending',
    payment_status ENUM('pending', 'paid', 'failed') DEFAULT 'pending',
    FOREIGN KEY (visitor_id) REFERENCES visitors(id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    INDEX idx_visitor_id (visitor_id),
    INDEX idx_course_id (course_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
