## Example gateway api

Гибридный бекенд `rest/ws` для тестового задания, работает с `mongodb`

### Пример конфигурации

```dotenv
# .env.local

NODE_ENV=dev

SERVICE_NAME=gateway

ZMQ_ADDRESS=tcp://127.0.0.1:5000
ZMQ_CURVE_SERVER_KEY='E$+qI6#?kvsAlAR4o7+1JgQt:*8LmC1dKtSrTS^D'

MONGO_USERNAME=root
MONGO_PASSWORD=password
MONGO_SUBNET=172.16.101.0/24
MONGO_GATEWAY=172.16.101.1
MONGO_URI=mongodb://root:password@172.16.101.2:27017/
MONGO_IP=172.16.101.2
```

## Running the app

```shell
make up && yarn start
```
