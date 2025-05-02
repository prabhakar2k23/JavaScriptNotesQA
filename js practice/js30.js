const profile = {
    user: {
      name: 'Eve',
      details: undefined
    }
  };
  
  const name = profile.user?.name ?? 'No Name';
  const details = profile.user?.details ?? 'No Details';
  
  console.log(name);     // Eve
  console.log(details);  // No Details
  