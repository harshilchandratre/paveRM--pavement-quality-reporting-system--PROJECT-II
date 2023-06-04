const express = require("express")
const router = express.Router()
const complaints = require("../models/complaintsModel")

router.route("/create").post((req, res) => {
    const reportDate = req.body.reportDate
    const reporteeName = req.body.reporteeName
    const reporteeEmail = req.body.reporteeEmail
    const areaName = req.body.areaName
    const pincodeNumber = req.body.pincodeNumber
    const districtName = req.body.districtName
    const stateName = req.body.stateName
    const roadName = req.body.roadName
    const roadType = req.body.roadType
    const paveRate = req.body.paveRate
    const describe = req.body.describe

    const newComplaints = new complaints({
        reportDate,
        reporteeName,
        reporteeEmail,
        areaName,
        pincodeNumber,
        districtName,
        stateName,
        roadName,
        roadType,
        paveRate,
        describe
    })

    newComplaints.save()

})

router.route("/read").get((req, res) => {
    complaints.find()
            .then(foundComplaints => res.json(foundComplaints))
})

module.exports = router;