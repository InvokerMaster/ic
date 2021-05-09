initSidebarItems({"constant":[["CRYPTO_RECORD_KEY_PREFIX",""],["CRYPTO_THRESHOLD_SIGNING_KEY_PREFIX",""],["CRYPTO_TLS_CERT_KEY_PREFIX",""],["NODE_OPERATOR_RECORD_KEY_PREFIX",""],["NODE_RECORD_KEY_PREFIX",""],["REPLICA_VERSION_KEY_PREFIX",""],["ROOT_SUBNET_ID_KEY","The subnet id of the NNS subnet. Remark: This subnet id actually points to the root subnet. In all cases, so far, the root subnet happens to host the NNS canisters and the registry in particular."],["SUBNET_LIST_KEY",""],["SUBNET_RECORD_KEY_PREFIX",""],["XDR_PER_ICP_KEY",""]],"fn":[["get_node_record_node_id","Returns the node_id associated with a given node_record key if the key is, in fact, a valid node_record_key."],["is_node_record_key","Checks whether a given key is a node record key"],["make_blessed_replica_version_key","Returns the only key whose payload is the list of blessed replica versions."],["make_catch_up_package_contents_key","Makes a key for a record for the catch up package contents."],["make_crypto_node_key","Makes a key for a crypto key registry entry for a node."],["make_crypto_threshold_signing_pubkey_key","Makes a key for a threshold signature public key entry for a subnet."],["make_crypto_tls_cert_key","Makes a key for a TLS certificate registry entry for a node."],["make_firewall_config_record_key",""],["make_icp_xdr_conversion_rate_record_key","Returns the only key whose payload is the ICP/XDR conversion rate."],["make_nns_canister_records_key","Returns the unique key that stores the information about post-genesis NNS canisters."],["make_node_operator_record_key",""],["make_node_record_key","Makes a key for a NodeRecord registry entry."],["make_provisional_whitelist_record_key",""],["make_replica_version_key","Makes a key for a ReplicaVersion registry entry."],["make_routing_table_record_key",""],["make_subnet_list_record_key","Returns the only key whose payload is the list of subnets."],["make_subnet_record_key","Makes a key for a SubnetRecord registry entry."],["maybe_parse_crypto_node_key",""],["maybe_parse_crypto_threshold_signing_pubkey_key",""],["maybe_parse_crypto_tls_cert_key",""],["principal_id_to_u64",""]]});