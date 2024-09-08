const registerUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        
    } catch (error) {
        
    }
};

const loginUser = async (req, res) => {
    res.json({
        success: true
    })
};

export {registerUser, loginUser};