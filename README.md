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

Get hourly temparature between January 1st and 2nd:

<<<<<<< Updated upstream
`/timeline?startDay=2018-01-01&endDay=2018-01-02&timeResolution=hourly&feature=temparature`
=======
`https://climathon2024-8c208f1487fd.herokuapp.com/timeline?startDate=2018-01-01&endDate=2018-01-02&timeResolution=hourly&feature=temparature`
>>>>>>> Stashed changes
