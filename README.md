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

Get hourly temparature between January 1st and 2nd:

`http://127.0.0.1:5000/timeline?startDay=2018-01-01&endDay=2018-01-02&timeResolution=hourly&feature=temparature`