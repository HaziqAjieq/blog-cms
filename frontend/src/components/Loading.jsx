import React from 'react'

export default function loading() {
  return (
    <div>
      
    </div>
  )
}

// Loading states

// import { useState, useEffect } from 'react';
// import LoadingSpinner from '../components/LoadingSpinner';

// export default function MainLayout() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => setLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) return <LoadingSpinner />;

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* ... rest of layout ... */}
//     </div>
//   );
// }