import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();
describe("Submit feedback", () => {
    it("Should be able to submit a feedback", async () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: createFeedbackSpy },
            { sendMail: sendMailSpy }
        );

        await expect(submitFeedback.execute({
            type: "BUG",
            comment: "Teste bugado",
            screenshot: "data:imageaksopaska",
        })).resolves.not.toThrow()

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();

    })
})

describe("Submit feedback", () => {
    it("Should be able to submit a feedback without type"  , () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        );

        expect(submitFeedback.execute({
            type: "",
            comment: "Teste bugado",
            screenshot: "data:imageaksopaska",
        })).rejects.toThrow()
    })
})

describe("Submit feedback", () => {
    it("Should be able to submit a feedback comment type", () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        );

        expect(submitFeedback.execute({
            type: "BUG",
            comment: "",
            screenshot: "data:imageaksopaska",
        })).rejects.toThrow()
    })
})


describe("Submit feedback", () => {
    it("Should be able to submit a feedback comment screenshot", () => {
        const submitFeedback = new SubmitFeedbackUseCase(
            { create: async () => { } },
            { sendMail: async () => { } }
        );

        expect(submitFeedback.execute({
            type: "BUG",
            comment: "Teste bugad",
            screenshot: "smaslkma ",
        })).rejects.toThrow()
    })
})