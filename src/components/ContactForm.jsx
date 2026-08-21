function ContactForm({
    formData,
    setFormData,
    handleSubmit,
    buttonText
}) {
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormDate({
            ...formData,
            [name]: value
        });
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">
                    First Name
                </label>

                <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label htmlFor="lastName">
                    Last Name
                </label>

            <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
            />
            </div>


            <div>
                <label htmlFor="email">
                    Email
                </label>

                <input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                />
            </div>


            <div>
                <label htmlFor="phone">
                    Phone
                </label>

                <input
                id="phone"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleChange}
                />
            </div>

            <button type="submit">
                {buttonText}
            </button>

        </form>
    )
}

export default ContactForm;