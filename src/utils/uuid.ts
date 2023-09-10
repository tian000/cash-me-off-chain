const UUIDS = [
    "806dc917-08e0-44bf-89e0-744c6517e422",
    "2fcccde5-711f-4cce-9fe7-fabbb1efa34d",
    "64e0f909-68b2-4502-96ad-ca3c5699a667",
]

let i = 0;

export function uuidv4() {
    return UUIDS[i++ % UUIDS.length]
}