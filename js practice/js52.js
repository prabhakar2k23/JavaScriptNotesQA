class MyError {
  constructor(message) {
    this.message = message;
    this.name = 'MyError';
  }
}

throw new MyError('Failed'); 
