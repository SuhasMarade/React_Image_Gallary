# React Image Gallary
It is basic Image gallary frontend
It has heading , search bar , and 20 photos grid in its layout

## features
- Axios Api use
- Routing (when you click on image you get information about image or you click on heading to return gallary page)
- Pagination (you can can forward and backward using prev and next button)


## API Reference

### About API

- [API LINK](https://www.slingacademy.com/article/sample-photos-free-fake-rest-api-for-practice/)

#### Get first 20 photos

```
  https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20
```


#### Get single photo

```
  https://api.slingacademy.com/v1/sample-data/photos/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



## Installation

```
# Clone this repository
$ git clone https://github.com/SuhasMarade/React_Image_Gallary.git

# Go into the repository
$ cd React_Image_Gallary

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
