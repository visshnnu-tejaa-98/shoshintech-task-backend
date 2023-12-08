import { servicesData } from "../data.js";

export const getAllServices = async (req, res) => {
  try {
    const services = servicesData;
    res.status(200).json({ data: services, message: null });
  } catch (error) {
    res.status(400).json({ data: null, message: "Something went wrong" });
  }
};

export const getSingleService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = servicesData.filter((service) => service.id_ == id);
    if (service) {
      res.status(200).json({ data: service, message: null });
    } else {
      res.status(404).json({ data: null, message: "Service Not Found" });
    }
  } catch (error) {
    res.status(400).json({ data: null, message: "Something went wrong" });
  }
};

export const addBooking = async (req, res) => {
  console.log(111);
  try {
    const { id, date, name } = req.body;
    let isUpdated = false;
    let updatedServices = servicesData.map((service) => {
      if (service.id_ === id && service.booked === true) {
        res.status(200).json({
          data: null,
          message:
            "This Service is not available right now, Please try again later",
        });
      }
      if (service.id_ === id && service.booked === false) {
        service.booked = true;
        service.bookedBy = name;
        service.bookingDate = date;
        isUpdated = true;
      }
      console.log(service);
    });
    if (isUpdated) {
      res.status(200).json({
        data: servicesData,
        message: "Service Booked Successfully!",
      });
    } else {
      res.status(200).json({ data: null, message: "Service Not found" });
    }
  } catch (error) {
    res.status(400).json({ data: null, message: "Something went wrong" });
  }
};
