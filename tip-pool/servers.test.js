describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new table row and pass it to created cells', function () {
    updateServerTable();

    //expect(Object.keys(allServers).length).toEqual(1);
    //expect(allServers['server' + serverId].serverName).toEqual('Alice');


  });


  afterEach(function() {
    // teardown logic
    serverNameInput.value='';
    allServers = [];
  });
});
