const mongoose = require("mongoose")

const notesSchema = {
    reportDate: Date,
    reporteeName: String,
    reporteeEmail: String,
    areaName: String,
    pincodeNumber: String,
    districtName: String,
    stateName: String,
    roadName: String,
    roadType: String,
    paveRate: String,
    describe: String
}

const complaints = mongoose.model("complaints", notesSchema)

module.exports = complaints