#!/bin/sh

if [ -n "$1" ];
then
    case "$1" in
            --frontend)
                if [ -n "$2" ];
                then
                    case "$2" in
                        up) docker-compose -f docker-compose-front.yml up --build -d ;;
                        down) docker-compose -f docker-compose-front.yml down ;;
                        init) docker-compose -f docker-compose-front.yml run frontend-medicial sh -c 'yarn install && yarn start' ;;
                        start) docker-compose -f docker-compose-front.yml start ;;
                        stop) docker-compose -f docker-compose-front.yml stop ;;
                        restart) docker-compose -f docker-compose-front.yml stop \
                        && docker-compose -f docker-compose-front.yml start ;;
                        ps) docker-compose -f docker-compose-front.yml ps ;;
                        log) docker-compose -f docker-compose-front.yml logs frontend-medicial ;;
                        ip) echo "Frontend ip " $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' frontend-medicial) ;;
                        *) echo "Укажите действия с образом frontend-medicial\r
    up - компилирует и запускает образ frontend\r
    down - останавливает образ и удаляет контейнеры\r
    init - производит инициализацию проекта (сперва надо дать команду - up. установка пакетов и запуск), делается один раз или после удаления каталога node_modules\r
    start - запускает образ, который был остановлен через stop\r
    stop - останавливает образ, не удаляет контейнер\r
    restart - перезапускает образ, не удаляет контейнер\r
    ps - просмотр списка запущенных образов\r
    log - просмотр лога frontend-app\r
    ip - посмотреть IP-адрес" 
                        ;;
                    esac
                else
                    echo "\tДля frontend не указаны параметры.\r\r
    Укажите действия с образом frontend\r
    up - компилирует и запускает образ frontend\r
    down - останавливает образ и удаляет контейнеры\r
    init - производит инициализацию проекта (сперва надо дать команду - up. установка пакетов и запуск), делается один раз или после удаления каталога node_modules\r
    start - запускает образ, который был остановлен через stop\r
    stop - останавливает образ, не удаляет контейнер\r
    restart - перезапускает образ, не удаляет контейнер\r
    ps - просмотр списка запущенных образов\r
    log - просмотр лога frontend-app\r
    ip - посмотреть IP-адрес"
                fi
            ;;
            --backend)
                if [ -n "$2" ];
                then
                    case "$2" in
                        up) docker-compose -f docker-compose-back.yml up --build -d ;;
                        down) docker-compose -f docker-compose-back.yml down ;;
                        init) docker-compose -f docker-compose-back.yml run backend-medicial sh -c 'npm install && npm run dev' ;;
                        start) docker-compose -f docker-compose-back.yml start ;;
                        stop) docker-compose -f docker-compose-back.yml stop ;;
                        restart) docker-compose -f docker-compose-back.yml stop \
                        && docker-compose -f docker-compose-back.yml start ;;
                        ps) docker-compose -f docker-compose-back.yml ps ;;
                        log) docker-compose -f docker-compose-back.yml logs med-back ;;
                        ip) echo "Backend ip (express): $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' backend-medicial) \r
Backend ip (mongo): $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongo) \r
Backend ip (mongo-express): $(docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' mongo-express)\r"
                         ;;
                        *) echo "Укажите действия с образом backend\r
    up - компилирует и запускает образ backend\r
    down - останавливает образ и удаляет контейнеры\r
    init - производит инициализацию проекта (сперва надо дать команду - up. установка пакетов и запуск), делается один раз или после удаления каталога node_modules\r
    start - запускает образ, который был остановлен через stop\r
    stop - останавливает образ, не удаляет контейнер\r
    restart - перезапускает образ, не удаляет контейнер\r
    ps - просмотр списка запущенных образов\r
    log - просмотр лога backend\r
    ip - посмотреть IP-адрес" 
                        ;;
                    esac
                else
                    echo "\tДля backend не указаны параметры.
    Укажите действия с образом backend\r
    up - компилирует и запускает образ backend\r
    down - останавливает образ и удаляет контейнеры\r
    init - производит инициализацию проекта (сперва надо дать команду - up. установка пакетов и запуск), делается один раз или после удаления каталога node_modules\r
    start - запускает образ, который был остановлен через stop\r
    stop - останавливает образ, не удаляет контейнер\r
    restart - перезапускает образ, не удаляет контейнер\r
    ps - просмотр списка запущенных образов\r
    log - просмотр лога backend\r
    ip - посмотреть IP-адрес"
                fi
            ;;
    esac
        shift
else
    echo "Параметры не заданы."
fi
