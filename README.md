# Climaton Challenge 2

---

## WebUI

The webUi is in the `web-ui` folder. To start a dev server using `npm`:

```bash
cd web-ui
npm install
npm start
```

> You can also use `pnpm` or `yarn` if you prefer.

---

## Backend

Backend is in the `backend` folder. To start a dev server:

```. .venv/bin/activate
flask run
```

Backend is deployed to Heroku at:

https://climathon2024-8c208f1487fd.herokuapp.com

Get hourly temparature (tas) between January 1st and 2nd:

`https://127.0.0.1:5000/zoom?startDate=2018-01-01&endDate=2018-01-02&feature=tas`

returns an array of floats:

`[3.8,4.0,4.1 ...]`
