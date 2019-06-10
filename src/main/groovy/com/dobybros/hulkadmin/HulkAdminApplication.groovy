package com.dobybros.hulkadmin

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.data.mongo.MongoDataAutoConfiguration
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration

@SpringBootApplication(exclude = [DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class, MongoAutoConfiguration.class, MongoDataAutoConfiguration.class])

class HulkAdminApplication {

	static void main(String[] args) {
		SpringApplication.run(HulkAdminApplication, args)
	}

}
