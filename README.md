# ReqCheck
🔑 Features to Build in 1 Day
Feature	Built in
✅ API request form	1h - done 
✅ Send request and view res.	1h
✅ Save request history	1h - done 
✅ Create mock API endpoint	2h - done 
✅ View all mock routes	30m 
✅ Clean UI with Tailwind	1h
✅ Deploy and record Loom	1h

INFO:     Application startup complete.
Received log: method='GET' url='https://jsonplaceholder.typicode.com/posts/1' timestamp='2025-06-08T17:23:40.989Z' details='' status='success' request_body={} response_body={'userId': 1, 'id': 1, 'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', 'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'} response_code=200
Traceback (most recent call last):
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 1963, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context     
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^     
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\default.py", line 943, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\cursors.py", line 153, in execute
    result = self._query(query)
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\cursors.py", line 322, in _query
    conn.query(q)
    ~~~~~~~~~~^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 563, in query
    self._affected_rows = self._read_query_result(unbuffered=unbuffered)
                          ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 825, in _read_query_result
    result.read()
    ~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 1199, in read
    first_packet = self.connection._read_packet()
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 775, in _read_packet
    packet.raise_for_error()
    ~~~~~~~~~~~~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\protocol.py", line 219, in raise_for_error
    err.raise_mysql_exception(self._data)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\err.py", line 150, in raise_mysql_exception
    raise errorclass(errno, errval)
pymysql.err.OperationalError: (1292, "Incorrect datetime value: '2025-06-08T17:23:40.989Z' for column 'timestamp' at row 1")      

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "C:\Work\Projects\ReqCheck\backend\routes\request_router.py", line 35, in create_request_log
    db.commit()
    ~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\session.py", line 2032, in commit
    trans.commit(_to_root=True)
    ~~~~~~~~~~~~^^^^^^^^^^^^^^^
  File "<string>", line 2, in commit
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\state_changes.py", line 139, in _go
    ret_value = fn(self, *arg, **kw)
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\session.py", line 1313, in commit
    self._prepare_impl()
    ~~~~~~~~~~~~~~~~~~^^
  File "<string>", line 2, in _prepare_impl
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\state_changes.py", line 139, in _go
    ret_value = fn(self, *arg, **kw)
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\session.py", line 1288, in _prepare_impl
    self.session.flush()
    ~~~~~~~~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\session.py", line 4345, in flush
    self._flush(objects)
    ~~~~~~~~~~~^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\session.py", line 4480, in _flush
    with util.safe_reraise():
         ~~~~~~~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\util\langhelpers.py", line 224, in __exit__
    raise exc_value.with_traceback(exc_tb)
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\session.py", line 4441, in _flush
    flush_context.execute()
    ~~~~~~~~~~~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\unitofwork.py", line 466, in execute
    rec.execute(self)
    ~~~~~~~~~~~^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\unitofwork.py", line 642, in execute
    util.preloaded.orm_persistence.save_obj(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self.mapper,
        ^^^^^^^^^^^^
        uow.states_for_mapper_hierarchy(self.mapper, False, False),
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
        uow,
        ^^^^
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\persistence.py", line 93, in save_obj
    _emit_insert_statements(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        base_mapper,
        ^^^^^^^^^^^^
    ...<3 lines>...
        insert,
        ^^^^^^^
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\orm\persistence.py", line 1233, in _emit_insert_statements    
    result = connection.execute(
        statement,
        params,
        execution_options=execution_options,
    )
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 1415, in execute
    return meth(
        self,
        distilled_parameters,
        execution_options or NO_OPTIONS,
    )
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\sql\elements.py", line 523, in _execute_on_connection
    return connection._execute_clauseelement(
           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        self, distilled_params, execution_options
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 1637, in _execute_clauseelement
    ret = self._execute_context(
        dialect,
    ...<8 lines>...
        cache_hit=cache_hit,
    )
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 1842, in _execute_context
    return self._exec_single_context(
           ~~~~~~~~~~~~~~~~~~~~~~~~~^
        dialect, context, statement, parameters
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 1982, in _exec_single_context
    self._handle_dbapi_exception(
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~^
        e, str_statement, effective_parameters, cursor, context  
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 2351, in _handle_dbapi_exception        
    raise sqlalchemy_exception.with_traceback(exc_info[2]) from e
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\base.py", line 1963, in _exec_single_context
    self.dialect.do_execute(
    ~~~~~~~~~~~~~~~~~~~~~~~^
        cursor, str_statement, effective_parameters, context     
        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^     
    )
    ^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\sqlalchemy\engine\default.py", line 943, in do_execute
    cursor.execute(statement, parameters)
    ~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\cursors.py", line 153, in execute
    result = self._query(query)
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\cursors.py", line 322, in _query
    conn.query(q)
    ~~~~~~~~~~^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 563, in query
    self._affected_rows = self._read_query_result(unbuffered=unbuffered)
                          ~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^^^^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 825, in _read_query_result
    result.read()
    ~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 1199, in read
    first_packet = self.connection._read_packet()
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\connections.py", line 775, in _read_packet
    packet.raise_for_error()
    ~~~~~~~~~~~~~~~~~~~~~~^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\protocol.py", line 219, in raise_for_error
    err.raise_mysql_exception(self._data)
    ~~~~~~~~~~~~~~~~~~~~~~~~~^^^^^^^^^^^^
  File "C:\Work\Projects\ReqCheck\.env\Lib\site-packages\pymysql\err.py", line 150, in raise_mysql_exception
    raise errorclass(errno, errval)
sqlalchemy.exc.OperationalError: (pymysql.err.OperationalError) (1292, "Incorrect datetime value: '2025-06-08T17:23:40.989Z' for column 'timestamp' at row 1")
[SQL: INSERT INTO request_logs (method, url, request_body, response_body, response_code, timestamp, details, status) VALUES (%(method)s, %(url)s, %(request_body)s, %(response_body)s, %(response_code)s, %(timestamp)s, %(details)s, %(status)s)]
[parameters: {'method': 'GET', 'url': 'https://jsonplaceholder.typicode.com/posts/1', 'request_body': None, 'response_body': '{"userId": 1, "id": 1, "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", "body": "quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto"}', 'response_code': 200, 'timestamp': '2025-06-08T17:23:40.989Z', 'details': '', 'status': 'success'}]       
(Background on this error at: https://sqlalche.me/e/20/e3q8)     

INFO:     127.0.0.1:50796 - "POST /request/api/requestlog HTTP/1.1" 500 Internal Server Error
