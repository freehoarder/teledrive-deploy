"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[477],{10:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"upgrade-210","metadata":{"permalink":"/blog/upgrade-210","editUrl":"https://github.com/mgilangjanuar/teledrive/edit/staging/blog/blog/2022-04-08-upgrade-210.md","source":"@site/blog/2022-04-08-upgrade-210.md","title":"Upgrade to 2.1.0","description":"What\'s New?","date":"2022-04-08T00:00:00.000Z","formattedDate":"April 8, 2022","tags":[{"label":"releases","permalink":"/blog/tags/releases"}],"readingTime":1.665,"truncated":false,"authors":[{"name":"M Gilang Januar","title":"The Creator","url":"https://github.com/mgilangjanuar","imageURL":"https://avatars.githubusercontent.com/u/3146378?v=4"}],"frontMatter":{"slug":"upgrade-210","title":"Upgrade to 2.1.0","author":"M Gilang Januar","author_title":"The Creator","author_url":"https://github.com/mgilangjanuar","author_image_url":"https://avatars.githubusercontent.com/u/3146378?v=4","tags":["releases"]}},"content":"## What\'s New?\\n\\n- Users Management (Admin Panel)\\n\\n![](./SCR-20220408-nvj.png)\\n\\n## Upgrade Guide\\n\\n### 1. Pull from GitHub\\n\\n```shell\\ngit reset --hard\\ngit clean -f\\ngit pull origin main\\n```\\n\\n### 2. Update variables\\n\\nThere\'s a new environment variable that you can added to your application:\\n\\n- `ADMIN_USERNAME`: this variable is used for login to the admin panel.\\n\\nSelect how you install your application to update your environment variable:\\n\\n- Manual installation:\\n\\n  Add `ADMIN_USERNAME` to `server/.env` file:\\n\\n  ```shell\\n  echo \\"ADMIN_USERNAME=your_telegram_username\\" >> server/.env\\n  ```\\n\\n- Docker installation:\\n\\n  Add `ADMIN_USERNAME` to `docker/.env` file:\\n\\n  ```shell\\n  echo \\"ADMIN_USERNAME=your_telegram_username\\" >> docker/.env\\n  ```\\n\\n- Heroku:\\n\\n  ```shell\\n  heroku config:set ADMIN_USERNAME=your_telegram_username\\n  ```\\n\\n- Vercel:\\n\\n  Go to the dashboard, select your project, and go to the **Settings > Environment Variables**. Then, add key: `ADMIN_USERNAME` and value: `your_telegram_username`.\\n\\n### 3. Update database\\n\\nThere\'s a new SQL file that you have to migrate to your database:\\n\\n- `dump.20220406.sql`\\n\\nSelect how you install your application to update your database schema:\\n\\n- Manual installation:\\n\\n  ```shell\\n  psql teledrive < ./server/src/model/migrations/dump.20220406.sql\\n  ```\\n\\n  **Note.** *Change `teledrive` with your database name.*\\n\\n- Docker installation:\\n\\n  ```shell\\n  cd docker\\n  docker container exec -i $(docker-compose ps -q db) psql -U postgres teledrive < ../server/src/model/migrations/dump.20220406.sql\\n  ```\\n\\n- Heroku:\\n\\n  ```shell\\n  heroku pg:psql --app YOUR_APP_NAME -f ./server/src/model/migrations/dump.20220406.sql\\n  ```\\n\\n  **Note.** *Change `YOUR_APP_NAME` to your application name.*\\n\\n### 4. Rebuild and run\\n\\nSelect how you deploy your application to rebuild the application:\\n\\n- Manual installation:\\n\\n  ```shell\\n  yarn install\\n  yarn workspaces run build\\n  cd server && node dist/index.js\\n  ```\\n\\n- Docker installation:\\n\\n  ```shell\\n  cd docker\\n  docker-compose down\\n  docker-compose up --build --force-recreate -d\\n  docker image prune -f   # remove dangling images\\n  ```\\n\\n- Heroku:\\n\\n  ```shell\\n  git push heroku main\\n  ```\\n\\n- Vercel:\\n\\n  ```shell\\n  yarn install\\n  yarn workspaces run build\\n  vercel --prod\\n  ```\\n\\n## Frequiently Asked Questions\\n\\n*Q: How to change the default port?*\\n\\nA: You can change the default port by update/add `PORT=80` to your `server/.env` file if you installed manually. Or, in `docker/.env` file if you installed with Docker. Then, you need to [rebuild](#4-rebuild-and-run) the application to apply the changes."}]}')}}]);