export const API_BASE_URL = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:8000/' 
  : 'https://your-production-domain.com/';

  // will add backend domain before launching