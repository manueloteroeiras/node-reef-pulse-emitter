
export default function(emitter, stream, type, data) {

  emitter.eventBuffer.push({
    stream,
    type,
    data,
    ocurredTs: new Date().getTime()
  });

};
