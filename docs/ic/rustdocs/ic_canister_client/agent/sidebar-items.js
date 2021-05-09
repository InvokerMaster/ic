initSidebarItems({"enum":[["Sender","Represents the identity of the sender."],["SigKeys",""]],"fn":[["ed25519_public_key_to_der","This is a minimal implementation of DER-encoding for Ed25519, as the keys are constant-length. The format is an ASN.1 SubjectPublicKeyInfo, whose header contains the OID for Ed25519, as specified in RFC 8410: https://tools.ietf.org/html/rfc8410"],["query_path","The HTTP path for query calls on the replica."],["read_state_path",""],["sign_read","Wraps the content into an envelope that contains the message signature."],["sign_submit","Wraps the content into an envelope that contains the message signature."],["update_path","The HTTP path for update calls on the replica."]],"struct":[["Agent","An agent to talk to the Internet Computer through the public endpoints."],["ClonableKeyPair","A version of Keypair with a clone instance. Originally this was done with a reference, but I'm avoiding them in async testing because it makes the tests much harder to write. This is a little inefficient, but it's only used for testing"],["Secp256k1KeyPair",""]],"type":[["SignF",""]]});