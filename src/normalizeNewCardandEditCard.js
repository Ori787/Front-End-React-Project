const NormalizeNewCard = (Value) => {
    return {
title: Value.title,
subtitle: Value.subtitle,
description: Value.description,
        phone: Value.phone,
        email: Value.email,
        web: Value.web,
        image: {
            url: Value.url,
            alt: Value.alt,
        },
        address: {
            state: Value.state,
            country: Value.country,
            city: Value.city,
            street: Value.street,
            houseNumber: Value.houseNumber,
            zip: +Value.zip,
        },
    };
}

export default NormalizeNewCard;