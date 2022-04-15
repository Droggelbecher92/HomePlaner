FROM openjdk:17

LABEL Thomas="thomaskittlaus@gmail.com"

ADD backend/target/homeplaner.jar homeplaner.jar

CMD [ "sh", "-c", "java -Dserver.port=$PORT -Dspring.data.mongodb.uri=$URI -jar /homeplaner.jar" ]
