const normalizeSignup = (inputValue) => {
return {
    name: {
        first: inputValue.first,
        middle: inputValue.middle,
last: inputValue.last,
    },
    phone: inputValue.phone,
    email: inputValue.email,
    password: inputValue.password,
    image: {
        url: inputValue.url,
        alt: inputValue.alt,
    },
    address: {
        state: inputValue.state,
        country: inputValue.country,
        city: inputValue.city,
        street: inputValue.street,
        houseNumber: inputValue.houseNumber,
        zip: +inputValue.zip,
    },
    isBusiness: true,
};
};

export default normalizeSignup;