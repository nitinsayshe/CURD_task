const userModel = require('../models/userModel')

exports.addUser = async (req, res) => {
    try {
        let { name, mobile, address } = req.body;
        console.log(req.body)
        let findPhone = await userModel.findOne({ mobile: mobile })
        if (findPhone) return res.status(400).json({ status: false, message: "Mobile Number already exist" })

        const data = await userModel.create({ name, mobile, address });
        return res.status(201).json({ status: true, message: "User Added Successfully", data: data })
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}

exports.getUser = async (req, res) => {
    try {

        const users = await userModel.find({ isDeleted: false })
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}

exports.getUserById = async (req, res) => {
    try {
        console.log("get user by id api")
        console.log(req.params.id)
        const user = await userModel.findById(req.params.id);

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}

exports.editUser = async (req, res) => {
    try {
        let user = req.body;
        let userId = req.params.id
        console.log("edit user",user)
        console.log("edit user id",userId)
        const editUser = await userModel.findByIdAndUpdate(userId, user);
        res.status(201).json(editUser);
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let userId = req.params.id
        await userModel.updateOne({ _id: userId }, { isDeleted: true });
        response.status(201).json("User deleted Successfully");
    } catch (error) {
        return res.status(500).json({ status: false, message: error.message });
    }
}