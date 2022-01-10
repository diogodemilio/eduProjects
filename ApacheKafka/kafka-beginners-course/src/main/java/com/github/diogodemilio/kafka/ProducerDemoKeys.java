package com.github.diogodemilio.kafka;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.common.serialization.StringSerializer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Properties;

public class ProducerDemoKeys {
    public static void main(String[] args) {
        String bootstrapServers = "127.0.0.1:9092";
        Properties properties = new Properties();
        Logger logger = LoggerFactory.getLogger(ProducerDemoKeys.class);

        // Old configuration way
        // properties.setProperty("bootstrap.servers", bootstrapServers);
        // properties.setProperty("key.serializer", StringSerializer.class.getName());
        // properties.setProperty("value.serializer", StringSerializer.class.getName());

        // Modern configuration way
        properties.setProperty(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG, bootstrapServers);
        properties.setProperty(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());
        properties.setProperty(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, StringSerializer.class.getName());

        // Create the producer
        KafkaProducer<String, String> producer = new KafkaProducer<String, String>(properties);

        String topic = "firstTopic";

        for (int index = 0; index < 10; index++) {

            String value = "Hello World number " + Integer.toString(index) + "!\n";
            String key = "id_" + Integer.toString(index);
            // Create a producer record
            ProducerRecord<String, String> record = new ProducerRecord<String, String>(topic, key, value);

            // Send Data
            producer.send(record, (recordMetadata, exception) -> {
                // executes every time a record is successfully sent or an exception is thrown
                if (exception == null) {
                    logger.info("Received new metadata! \n"
                            + "Topic: " + recordMetadata.topic() + "\n"
                            + "Partition: " + recordMetadata.partition() + "\n"
                            + "Offset: " + recordMetadata.offset() + "\n"
                            + "Timestamp: " + recordMetadata.timestamp() + "\n");
                } else {
                    logger.error("Error while producing: " + exception.toString() + "\n");
                }
            });

            producer.flush();
            producer.close();
        }
    }
}
