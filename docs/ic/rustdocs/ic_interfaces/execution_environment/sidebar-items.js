initSidebarItems({"enum":[["CanisterHeartbeatError","Errors when executing `canister_heartbeat`."],["ExecResultVariant","An execution can finish successfully or get interrupted (out of cycles)."],["HypervisorError","Errors returned by the Hypervisor."],["IngressHistoryError","Errors that can be returned when reading/writing from/to ingress history."],["MessageAcceptanceError","Different types of errors that can be returned from the function(s) that check if messages should be accepted or not."],["SubnetAvailableMemoryError","Errors that can be returned when fetching the available memory on a subnet."],["TrapCode","Various traps that a canister can create."],["TrySelect","An underlying struct/helper for implementing select() on multiple AsyncResult's. If an AsyncResult is really an ongoing computation, we have to obtain its result from a channel. However, some AsyncResults are of type EarlyResult, which only emulates being async, but in reality is a ready value (mostly used for early errors). In such case, there is no channel present and we can simply return the value without waiting."]],"struct":[["EarlyResult","Sync result implementing async interface."],["ExecResult","Generic async result of an execution."],["ExecuteMessageResult","The data structure returned by `ExecutionEnvironment.execute_canister_message()`."],["InstanceStats","Instance execution statistics. The stats are cumulative and contain measurements from the point in time when the instance was created up until the moment they are requested."],["SubnetAvailableMemory","This struct is used to manage the view of the current amount of memory available on the subnet between multiple canisters executing in parallel."]],"trait":[["AsyncResult","An async result which allows for sync wait and select."],["ExecutionEnvironment","ExecutionEnvironment is the component responsible for executing messages on the IC."],["IngressHistoryReader","Interface for reading the history of ingress messages."],["IngressHistoryWriter","Interface for updating the history of ingress messages."],["InterruptedExec","Interrupted execution. Can be resumed or canceled."],["QueryHandler","Interface for the component to execute queries on canisters.  It can be used by the HttpHandler and other system components to execute queries."],["SystemApi","A trait for providing all necessary imports to a Wasm module."]],"type":[["HypervisorResult",""]]});