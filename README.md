# Brukhan project

### Quick Start

```shell
$ composer install
$ composer install --verbose --prefer-dist --no-progress --no-interaction --no-dev --optimize-autoloader
$ cp .env.example .env
$ php artisan key:generate
$ php artisan migrate:refresh --seed
$ composer ft
$ npm install
$ npm run ft
```

### Add storage link

```shell
$ php artisan storage:link
```

### Add admin user

```shell
$ php artisan make:filament-user
```

### Add log viewer

```shell
$ php artisan log-viewer:publish
```

### Vue format

```shell
$ npm run lint:fix
$ npm run lint
$ npm run format
```
