(function() {var implementors = {};
implementors["ic_artifact_manager"] = [{"text":"impl&lt;PoolConsensus:&nbsp;<a class=\"trait\" href=\"ic_interfaces/consensus_pool/trait.MutableConsensusPool.html\" title=\"trait ic_interfaces::consensus_pool::MutableConsensusPool\">MutableConsensusPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>, PoolIngress:&nbsp;<a class=\"trait\" href=\"ic_interfaces/ingress_pool/trait.IngressPoolSelect.html\" title=\"trait ic_interfaces::ingress_pool::IngressPoolSelect\">IngressPoolSelect</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactProcessor.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactProcessor\">ArtifactProcessor</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.ConsensusArtifact.html\" title=\"struct ic_artifact_manager::artifact::ConsensusArtifact\">ConsensusArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/actors/struct.ConsensusClient.html\" title=\"struct ic_artifact_manager::actors::ConsensusClient\">ConsensusClient</a>&lt;PoolConsensus, PoolIngress&gt;","synthetic":false,"types":["ic_artifact_manager::actors::ConsensusClient"]},{"text":"impl&lt;Pool:&nbsp;<a class=\"trait\" href=\"ic_interfaces/ingress_pool/trait.MutableIngressPool.html\" title=\"trait ic_interfaces::ingress_pool::MutableIngressPool\">MutableIngressPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactProcessor.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactProcessor\">ArtifactProcessor</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.IngressArtifact.html\" title=\"struct ic_artifact_manager::artifact::IngressArtifact\">IngressArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/actors/struct.IngressClient.html\" title=\"struct ic_artifact_manager::actors::IngressClient\">IngressClient</a>&lt;Pool&gt;","synthetic":false,"types":["ic_artifact_manager::actors::IngressClient"]},{"text":"impl&lt;PoolCertification:&nbsp;<a class=\"trait\" href=\"ic_interfaces/certification/trait.MutableCertificationPool.html\" title=\"trait ic_interfaces::certification::MutableCertificationPool\">MutableCertificationPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactProcessor.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactProcessor\">ArtifactProcessor</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.CertificationArtifact.html\" title=\"struct ic_artifact_manager::artifact::CertificationArtifact\">CertificationArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/actors/struct.CertificationClient.html\" title=\"struct ic_artifact_manager::actors::CertificationClient\">CertificationClient</a>&lt;PoolCertification&gt;","synthetic":false,"types":["ic_artifact_manager::actors::CertificationClient"]},{"text":"impl&lt;PoolDkg:&nbsp;<a class=\"trait\" href=\"ic_interfaces/dkg/trait.MutableDkgPool.html\" title=\"trait ic_interfaces::dkg::MutableDkgPool\">MutableDkgPool</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactProcessor.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactProcessor\">ArtifactProcessor</a>&lt;<a class=\"struct\" href=\"ic_artifact_manager/artifact/struct.DkgArtifact.html\" title=\"struct ic_artifact_manager::artifact::DkgArtifact\">DkgArtifact</a>&gt; for <a class=\"struct\" href=\"ic_artifact_manager/actors/struct.DkgClient.html\" title=\"struct ic_artifact_manager::actors::DkgClient\">DkgClient</a>&lt;PoolDkg&gt;","synthetic":false,"types":["ic_artifact_manager::actors::DkgClient"]}];
implementors["ic_state_manager"] = [{"text":"impl <a class=\"trait\" href=\"ic_interfaces/artifact_manager/trait.ArtifactProcessor.html\" title=\"trait ic_interfaces::artifact_manager::ArtifactProcessor\">ArtifactProcessor</a>&lt;<a class=\"struct\" href=\"ic_state_manager/state_sync/struct.StateSyncArtifact.html\" title=\"struct ic_state_manager::state_sync::StateSyncArtifact\">StateSyncArtifact</a>&gt; for <a class=\"struct\" href=\"ic_state_manager/struct.StateManagerImpl.html\" title=\"struct ic_state_manager::StateManagerImpl\">StateManagerImpl</a>","synthetic":false,"types":["ic_state_manager::StateManagerImpl"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()