initSidebarItems({"constant":[["UNIX_EPOCH","The unix epoch."]],"fn":[["current_time","Returns the current time."],["current_time_and_expiry_time","A utility function to help set the expiry time when creating an SignedIngress message from scratch.  Returns the current time and expiry time.  The expiry time is set from the current system time + the maximum amount of time ingress messages are allowed to stay alive for - 60 seconds."]],"struct":[["Time","Time since UNIX_EPOCH (in nanoseconds). Just like 'std::time::Instant' or 'std::time::SystemTime', [Time] does not implement the [Default] trait. Please use `ic_test_utilities::mock_time` if you ever need such a value."]]});