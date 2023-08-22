export interface ModalPostsProps{ 
  modalOpen: boolean, 
  setmodalOpen: ()=> void 
  variant?: "SUCCESS"| "ERROR"
}