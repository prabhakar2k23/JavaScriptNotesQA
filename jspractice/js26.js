const user = {
    profile: {
      name: 'Alice',
      address: {
        street: '123 Main St',
        city: 'Wonderland',
        postalCode: {
          code: '12345'
        }
      }
    }
  };
  
  const result = user?.profile?.address?.postalCode?.code ?? 'Default Code';
  console.log(result);
  
  const invalidResult = user?.profile?.contact?.phoneNumber ?? 'No Phone';
  console.log(invalidResult);
  