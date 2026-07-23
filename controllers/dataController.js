const Student = require("../models/Student");

// Form Page
const formPage = (req, res) => {
    res.render("form");
};

// Insert Data
const insertData = async (req, res) => {
    try {
        await Student.create({
            name: req.body.name,
            email: req.body.email,
            course: req.body.course
        });

        res.redirect("/table");
    } catch (error) {
        console.log(error);
    }
};

// Table Page
const tablePage = async (req, res) => {
    try {
        const students = await Student.find();

        res.render("table", { students });
    } catch (error) {
        console.log(error);
    }
};

// Edit Page
const editPage = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        res.render("edit", { student });
    } catch (error) {
        console.log(error);
    }
};

// Update Data
const updateData = async (req, res) => {
    try {
        await Student.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            course: req.body.course
        });

        res.redirect("/table");
    } catch (error) {
        console.log(error);
    }
};

// Delete Data
const deleteData = async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.redirect("/table");
    } catch (error) {
        console.log(error);
    }
};
module.exports = {
    formPage,
    insertData,
    tablePage,
    editPage,
    updateData,
    deleteData
};