var _slicedToArray = (function () {
  function sliceIterator(arr, i) {
    var _arr = []
    var _n = true
    var _d = false
    var _e = undefined
    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value)
        if (i && _arr.length === i) break
      }
    } catch (err) {
      _d = true
      _e = err
    } finally {
      try {
        if (!_n && _i['return']) _i['return']()
      } finally {
        if (_d) throw _e
      }
    }
    return _arr
  }
  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i)
    } else {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance',
      )
    }
  }
})()

var _React = React,
  useEffect = _React.useEffect,
  useState = _React.useState

function MyApp() {
  return React.createElement(
    'h1',
    {
      onClick: function onClick() {
        return alert(123)
      },
    },
    'Hello, world!',
  )
}

function Container() {
  var _useState = useState('唐僧'),
    _useState2 = _slicedToArray(_useState, 2),
    name = _useState2[0],
    SetName = _useState2[1]

  var _useState3 = useState(true),
    _useState4 = _slicedToArray(_useState3, 2),
    init = _useState4[0],
    setInit = _useState4[1]

  useEffect(
    function () {
      if (!init) {
        SetName('猪八戒')
      }
    },
    [init],
  )
  return React.createElement(
    'div',
    {
      onClick: function onClick() {
        return setInit(false)
      },
    },
    React.createElement('div', null, ' hello ', name),
    React.createElement(MyApp, null),
  )
}

var container = document.getElementById('root')
var root = ReactDOM.createRoot(container)
root.render(React.createElement(Container, null))
ong
