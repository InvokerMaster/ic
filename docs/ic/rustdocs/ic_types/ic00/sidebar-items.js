initSidebarItems({"constant":[["IC_00","The id of the management canister."]],"enum":[["Method","Methods exported by ic:00."]],"struct":[["CanisterIdRecord","Struct used for encoding/decoding `(record {canister_id})`."],["CanisterSettingsArgs","Struct used for encoding/decoding `(record {     controller : opt principal;     compute_allocation: opt nat;     memory_allocation: opt nat; })`"],["CanisterStatusResult","The deprecated version of CanisterStatusResult that is being used by NNS canisters."],["CanisterStatusResultV2","Struct used for encoding/decoding `(record {     status : variant { running; stopping; stopped };     settings: definite_canister_settings;     module_hash: opt blob;     controller: principal;     memory_size: nat;     cycles: nat; })`"],["CreateCanisterArgs","Struct used for encoding/decoding `(record {     settings : opt canister_settings; })`"],["EmptyBlob","Represents the empty blob."],["InstallCodeArgs","Struct used for encoding/decoding `(record {     mode : variant { install; reinstall; upgrade };     canister_id: principal;     wasm_module: blob;     arg: blob;     compute_allocation: opt nat;     memory_allocation: opt nat;     query_allocation: opt nat; })`"],["ProvisionalCreateCanisterWithCyclesArgs","Struct used for encoding/decoding `(record { amount : opt nat; })`"],["ProvisionalTopUpCanisterArgs","Struct used for encoding/decoding `(record {     canister_id : principal;     amount: nat; })`"],["SetControllerArgs","Struct used for encoding/decoding `(record {     canister_id : principal;     controller: principal; })`"],["SetupInitialDKGArgs","Struct used for encoding/decoding `(record {     node_ids : vec principal;     registry_version: nat; })`"],["SetupInitialDKGResponse","Represents the response for a request to setup an initial DKG for a new subnet."],["UpdateSettingsArgs","Struct used for encoding/decoding `(record {     canister_id : principal;     settings: canister_settings; })`"]],"trait":[["Payload","A trait to be implemented by all structs that are used as payloads by IC00. This trait encapsulates Candid serialization so that consumers of IC00 don't need to explicitly depend on Candid."]]});