module.exports = async (req, res) => {
    try {
        await req.session.destroy();
        res.send({'message': 'You are successfully Logged out'});
    }
    catch (error) {
        res.send(error);
    }
}