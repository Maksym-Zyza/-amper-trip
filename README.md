# Camper Trip

### Leave all worries behind and embark on the journey of your dreams!

### Rent a camper and embark on an unforgettable adventure with Camper Trip.

#### About

Camper Trip is your trusted partner for unforgettable travels. We offer modern
and comfortable campers that will make your trip as convenient and enjoyable as
possible. Our mission is to provide you with the freedom to explore and enjoy
every moment of your journey. Whether you are planning a short weekend getaway
or a long expedition, Camper Trip is always ready to provide you with everything
you need for a comfortable trip. Join us and discover new horizons.

## Features

- **Modern Campers**: Fully equipped with the latest amenities for a comfortable
  journey.
- **Easy Booking**: Simple and fast booking process to get you on the road
  quickly.
- **Flexible Rentals**: Options for both short and long-term rentals to suit
  your travel plans.
- **24/7 Support**: Our team is always ready to assist you during your trip.

## Technologies Used

- **React**: Created using React, this SPA (Single Page Application) serves the
  best needs of its customers.
- **React Router**: App navigation implemented using React Router.
- **Redux**: Main store state is managed with Redux, saving the "Favorites" list
  between sessions using Redux Persist.
- **Axios**: HTTP requests are made with Axios.
- **MockAPI**: Main data is stored on a remote server using MockAPI.io.
- **Figma**: Precise content markup and styles are made using the Figma project
  design.

# Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Maksym-Zyza/camper-trip.git
```

2. Navigate to the project directory:

```bash
cd camper-trip
```

3. Install the dependencies:

```bash
npm install
```

### Running the Application

To start the development server, run:

```bash
npm  start
```

## Project Structure

camper-trip/\
│\
├── public/\
│ ├── index.html\
│ └── ...\
│\
├── src/\
│ ├── API\
│ │ ├── axios-service/\
│ ├── components/\
│ │ ├── BookingForm/\
│ │ ├── MapViewPage/\
│ │ ├── UI/\
│ │ └── ...\
│ │\
│ ├── context/\
│ │ ├── index.js\
│ │ └── ...\
│ │\
│ ├── hooks/\
│ │ ├── useToggleSidebar.js\
│ │ └── ...\
│ │\
│ ├── pages/\
│ │ ├── HomePage.js\
│ │ └── ...\
│ │\
│ ├── store/\
│ │ ├── store.js\
│ │ ├── reducer.js\
│ │ ├── selectors.js\
│ │ └── ...\
│ │\
│ ├── utils/\
│ │ ├── filterAdverts.js\
│ │ ├── filterParams.js\
│ │ ├── pagination.js\
│ │ └── ...\
│ │\
│ ├── App.js\
│ ├── index.js\
│ └── ...\
├── .gitignore\
├── .prettierrc.json\
├── jsconfig.json.json\
├── package-lock.json\
├── package.json\
├── package.json\
└── README.md\
