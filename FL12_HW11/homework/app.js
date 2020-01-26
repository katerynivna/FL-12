const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

function toggleFunc(event) {
  if (this.classList.contains('inactive')) {
    this.classList.remove('inactive');
    event.stopPropagation();
  } else {
    this.classList.add('inactive');
    event.stopPropagation();
  }
}

function buildDomTree(input, rootNode) {
  let listStruct = document.createElement('ul');

  input.forEach(function(elements) {
    let folderLi = document.createElement('li');
    let wrap = document.createElement('div');
    let folderName = document.createTextNode(elements.title);
    let icon = document.createElement('i');
    icon.classList.add('material-icons');
    wrap.appendChild(icon);

    folderLi.appendChild(wrap);
    wrap.appendChild(folderName);
    listStruct.appendChild(folderLi);

    if (elements.folder) {
      folderLi.classList.add('folder');
      icon.classList.add('folder-icon');
      folderLi.classList.add('inactive');
      wrap.addEventListener('click', toggleFunc);

      if (elements.children) {
        buildDomTree(elements.children, listStruct);
      } else if (elements.children === null || elements.children === false){
        folderLi.classList.add('emptyFolder');
        let p = document.createElement('p');
        let pNote = document.createTextNode('Folder is empty');
        folderLi.appendChild(p.appendChild(pNote));
      }
    } else {
      folderLi.classList.add('file');
    }
  });
  console.log(listStruct);
  rootNode.appendChild(listStruct);
}

buildDomTree(structure, rootNode);
