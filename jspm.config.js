SystemJS.config({
  devConfig: {
    "map": {
      "@angular/core": "npm:@angular/core@2.1.0",
      "es6-shim": "github:es-shims/es6-shim@0.35.0",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.9",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "reflect-metadata": "npm:reflect-metadata@0.1.8",
      "rxjs": "npm:rxjs@5.0.0-beta.12",
      "zone.js": "npm:zone.js@0.6.18",
      "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
      "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha"
    },
    "packages": {
      "github:frankwallis/plugin-typescript@4.0.9": {
        "map": {
          "typescript": "npm:typescript@1.8.10"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:rxjs@5.0.0-beta.12": {
        "map": {
          "symbol-observable": "npm:symbol-observable@1.0.2"
        }
      },
      "github:jspm/nodelibs-crypto@0.2.0-alpha": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-hash": "npm:create-hash@1.1.2",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "randombytes": "npm:randombytes@2.0.3",
          "create-hmac": "npm:create-hmac@1.1.4",
          "inherits": "npm:inherits@2.0.3",
          "pbkdf2": "npm:pbkdf2@3.0.9"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "inherits": "npm:inherits@2.0.3",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "elliptic": "npm:elliptic@6.3.2",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "ripemd160": "npm:ripemd160@1.0.1",
          "cipher-base": "npm:cipher-base@1.0.3",
          "sha.js": "npm:sha.js@2.4.5"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "github:jspm/nodelibs-timers@0.2.0-alpha": {
        "map": {
          "timers-browserify": "npm:timers-browserify@1.4.2"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "asn1.js": "npm:asn1.js@4.8.1"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "cipher-base": "npm:cipher-base@1.0.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "inherits": "npm:inherits@2.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "elliptic": "npm:elliptic@6.3.2",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:timers-browserify@1.4.2": {
        "map": {
          "process": "npm:process@0.11.9"
        }
      },
      "npm:elliptic@6.3.2": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "brorand": "npm:brorand@1.0.6",
          "hash.js": "npm:hash.js@1.0.3"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:asn1.js@4.8.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "base64-js": "npm:base64-js@1.2.0",
          "ieee754": "npm:ieee754@1.1.8"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "isarray": "npm:isarray@1.0.0",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "core-util-is": "npm:core-util-is@1.0.2"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  typescriptOptions: {
    "tsconfig": true
  },
  packages: {
    ".": {
      "main": "index.ts",
      "defaultExtension": "ts"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {},
  packages: {}
});
