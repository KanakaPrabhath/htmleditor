/**
 * Logger utility for the editor
 * Provides consistent logging across the application
 * Disabled in production for performance
 */

const isDevelopment = import.meta.env.MODE === 'development';

/**
 * Logger class for structured logging
 */
class Logger {
  constructor(namespace = 'Editor') {
    this.namespace = namespace;
  }

  /**
   * Formats log message with namespace
   * @param {string} level - Log level
   * @param {string} message - Log message
   * @param {any} data - Optional data to log
   * @returns {string} Formatted message
   */
  _format(level, message, data) {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${this.namespace}] [${level}] ${message}`;
  }

  /**
   * Info level logging
   * @param {string} message - Info message
   * @param {any} data - Optional data
   */
  info(message, data) {
    if (!isDevelopment) return;
    
    console.log(this._format('INFO', message));
    if (data) console.log(data);
  }

  /**
   * Warning level logging
   * @param {string} message - Warning message
   * @param {any} data - Optional data
   */
  warn(message, data) {
    if (!isDevelopment) return;
    
    console.warn(this._format('WARN', message));
    if (data) console.warn(data);
  }

  /**
   * Error level logging
   * @param {string} message - Error message
   * @param {Error|any} error - Error object or data
   */
  error(message, error) {
    if (!isDevelopment) return;
    
    console.error(this._format('ERROR', message));
    if (error) {
      if (error instanceof Error) {
        console.error(error.message);
        console.error(error.stack);
      } else {
        console.error(error);
      }
    }
  }

  /**
   * Debug level logging
   * @param {string} message - Debug message
   * @param {any} data - Optional data
   */
  debug(message, data) {
    if (!isDevelopment) return;
    
    console.debug(this._format('DEBUG', message));
    if (data) console.debug(data);
  }
}

// Create default logger instance
export const logger = new Logger('Editor');

// Export Logger class for custom instances
export default Logger;
