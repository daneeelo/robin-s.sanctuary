export const minDelay = (
    sourceRef: globalThis.Ref,
    delay: number,
    doImmediate: () => true,
    doAfterDelay: () => false
) => {
    sourceRef.value = doImmediate();
    let timeID: NodeJS.Timeout;

    timeID = setTimeout(() => {
        sourceRef.value = doAfterDelay();

        clearTimeout(timeID);
    }, delay);
};
