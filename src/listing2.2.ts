const logger: () => never = () => {
  while (true) {
    console.log('The server is up and running');
  }
};

function logError(errorMessage: string): void {
  console.error(errorMessage);
}

