export const formatDateTime = (dateTimeString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };

    return new Date(dateTimeString).toLocaleDateString("en-US", options);
};
